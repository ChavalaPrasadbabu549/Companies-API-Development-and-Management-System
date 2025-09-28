import { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { Edit, PersonAdd, Visibility } from "@mui/icons-material";
import CustomTable from "./components/CustomTable";
import CompanyModal from "./components/Company/CompanyModal";
import axios from "axios";
import CustomButton from "./components/CustomButton";

const Columns = [
  { label: "S No", field: "sno", width: "50px", textAlign: "left" },
  { label: "Company Name", field: "name", width: "150px", textAlign: "left" },
  { label: "Registration No.", field: "registrationNumber", width: "150px", textAlign: "left" },
  { label: "Industry", field: "industry", width: "120px", textAlign: "left" },
  { label: "Type", field: "companyType", width: "120px", textAlign: "left" },
  { label: "CEO", field: "ceo", width: "120px", textAlign: "left" },
  { label: "Employees", field: "employees", width: "100px", textAlign: "left" },
  { label: "Phone", field: "phone", width: "120px", textAlign: "left" },
  { label: "Email", field: "email", width: "150px", textAlign: "left" },
  { label: "Website", field: "website", width: "150px", textAlign: "left" },
  { label: "Status", field: "status", width: "100px", textAlign: "center" },
  { label: "Actions", field: "action", width: "120px", textAlign: "center" },
];

export interface Branch {
  country: string;
  address: string;
  _id?: string;
}

export interface Company {
  _id: string;
  name: string;
  legalName?: string;
  registrationNumber: string;
  industry: string;
  subIndustry?: string;
  companyType: "Public" | "Private" | "Partnership" | "Government";
  ownership?: string;
  email: string;
  phone?: string;
  fax?: string;
  website?: string;
  address?: string;
  foundedYear?: number;
  founders?: string[];
  ceo?: string;
  boardMembers?: string[];
  employees?: number;
  branches?: Branch[];
  annualRevenue?: number;
  valuation?: number;
  stockSymbol?: string;
  isListed?: boolean;
  status?: boolean;
  licenses?: string[];
  taxId?: string;
  regulatoryBody?: string;
  logoUrl?: string;
  socialLinks?: string[];
  about?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  [key: string]: any;
}


function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectdata, setSelectdata] = useState<Company | null>(null);


  const fetchCompanies = async () => {
    try {
      const response = await axios.get("http://localhost:9000/company/getAll");
      const formattedCompanyData = response?.data?.data.map((item: any, index: number) => ({
        sno: index + 1,
        _id: item._id,
        data: item,
        name: item?.name || "---",
        legalName: item?.legalName || "---",
        registrationNumber: item?.registrationNumber || "---",
        industry: item?.industry || "---",
        subIndustry: item?.subIndustry || "---",
        companyType: item?.companyType || "---",
        ownership: item?.ownership || "---",
        email: item?.email || "---",
        phone: item?.phone || "---",
        fax: item?.fax || "---",
        website: item?.website || "---",
        address: item?.address || "---",
        foundedYear: item?.foundedYear || "---",
        founders: item?.founders || [],
        ceo: item?.ceo || "---",
        boardMembers: item?.boardMembers || [],
        employees: item?.employees ?? "---",
        branches: item?.branches || [],
        annualRevenue: item?.annualRevenue || "---",
        valuation: item?.valuation || "---",
        stockSymbol: item?.stockSymbol || "---",
        isListed: item.isListed ?? false,
        status: item.status ?? false,
        licenses: item?.licenses || [],
        taxId: item?.taxId || "---",
        regulatoryBody: item?.regulatoryBody || "---",
        logoUrl: item?.logoUrl || "",
        socialLinks: item?.socialLinks || [],
        about: item?.about || "---",
      }));

      setCompanies(formattedCompanyData);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);


  const handleEdit = (company: Company) => {
    setSelectdata(company);
    setOpenDialog(true);
  };

  const companiesWithActions = companies.map((company, index) => ({
    id: index + 1,
    ...company,
    status: company.status ? "Active" : "Inactive",
    isListed: company.isListed ? "Yes" : "No",
    action: [
      {
        label: "Edit",
        icon: <Edit fontSize="small" />,
        color: "primary",
        onClick: () => handleEdit(company),
      },
      {
        label: "View",
        icon: <Visibility fontSize="small" />,
        color: "secondary",
        onClick: () => console.log("View:", company.name),
      },
    ],
  }));


  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Company Management
            </Typography>
            <Typography variant="body1" >
              Manage registered companies. Add, update, or remove details like name, registration number, industry, and contacts.
            </Typography>
          </Box>
          <Box>
            <CustomButton
              variant="contained"
              startIcon={<PersonAdd />}
              onClick={() => {
                setSelectdata(null);
                setOpenDialog(true);
              }}
              label={"Add New Company"}
            />
          </Box>
        </Box>

        <Box>
          <CustomTable
            columns={Columns}
            rows={companiesWithActions}
            rowsPerPageOptions={[5, 10]} />
        </Box>
        <CompanyModal
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
          companyData={selectdata}
          refreshList={fetchCompanies}
        />
      </Box>
    </Container>
  )
}

export default App
