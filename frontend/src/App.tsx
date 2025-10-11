import { useCallback, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Edit, PersonAdd, Visibility } from "@mui/icons-material";
import CustomTable from "./components/CustomTable";
import CompanyModal from "./components/Company/CompanyModal";
import axios from "axios";
import CustomButton from "./components/CustomButton";
import type { Company, TableColumn } from "./types/Type";
import Navbar from "./components/Navbar";

const Columns: TableColumn[] = [
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


function App() {
  const containerStyles = { mt: 3 };
  const headerBox = { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 };
  const [openDialog, setOpenDialog] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectdata, setSelectdata] = useState<Company | null>(null);
  const EditIcon = useMemo(() => <Edit fontSize="small" />, []);
  const ViewIcon = useMemo(() => <Visibility fontSize="small" />, []);

  const fetchCompanies = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);


  const handleEdit = useCallback((company: Company) => {
    setSelectdata(company);
    setOpenDialog(true);
  }, []);

  const companiesWithActions = useMemo(() =>
    companies.map((company, index) => ({
      id: index + 1,
      ...company,
      status: company.status ? "Active" : "Inactive",
      isListed: company.isListed ? "Yes" : "No",
      action: [
        {
          label: "Edit",
          icon: EditIcon,
          color: "primary",
          onClick: () => handleEdit(company),
        },
        {
          label: "View",
          icon: ViewIcon,
          color: "secondary",
          onClick: () => console.log("View:", company.name),
        },
      ],
    })),
    [companies, EditIcon, ViewIcon, handleEdit]
  );


  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={containerStyles}>
          <Box sx={headerBox}>
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
    </>
  )
}

export default App
