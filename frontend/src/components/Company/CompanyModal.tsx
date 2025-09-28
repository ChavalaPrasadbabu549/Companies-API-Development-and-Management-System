import React, { useEffect, useMemo, useState } from 'react'
import CustomModal from '../CustomModal';
import CustomButton from '../CustomButton';
import type { Company } from '../../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import OperationalInfo from './OperationalInfo';
import FinancialInfo from './FinancialInfo';
import ComplianceInfo from './ComplianceInfo';
import BrandingInfo from './BrandingInfo';


interface CompanyModalProps {
    open: boolean;
    handleClose: () => void;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    companyData?: Company | null;
    refreshList: () => void;
}

const CompanyModal: React.FC<CompanyModalProps> = ({ open, handleClose, refreshList, maxWidth = 'md', companyData }) => {
    const booleanOptions = useMemo(() => [
        { value: true, label: "Yes" },
        { value: false, label: "No" },
    ], []);

    const statusOptions = useMemo(() => [
        { value: true, label: "Active" },
        { value: false, label: "Inactive" },
    ], []);

    const companyOptions = useMemo(() => [
        { value: "Public", label: "Public" },
        { value: "Private", label: "Private" },
        { value: "Partnership", label: "Partnership" },
        { value: "Government", label: "Government" },
    ], []);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        legalName: "",
        registrationNumber: "",
        industry: "",
        subIndustry: "",
        companyType: "",
        ownership: "",
        email: "",
        phone: "",
        fax: "",
        website: "",
        address: "",
        foundedYear: "" as string | number,
        founders: [] as string[],
        ceo: "",
        boardMembers: [] as string[],
        employees: "" as string | number,
        // branches: [] as string[],
        annualRevenue: "" as string | number,
        valuation: "" as string | number,
        stockSymbol: "",
        isListed: false,
        status: false,
        licenses: [] as string[],
        taxId: "",
        regulatoryBody: "",
        logoUrl: "",
        socialLinks: [] as string[],
        about: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleChangeArray = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const arrayValues = value.split(",").map(v => v.trim()).filter(Boolean);
        setFormData(prev => ({ ...prev, [name]: arrayValues }));
    };

    useEffect(() => {
        if (companyData) {
            setFormData({
                name: companyData.name || "",
                legalName: companyData.legalName || "",
                registrationNumber: companyData.registrationNumber || "",
                industry: companyData.industry || "",
                subIndustry: companyData.subIndustry || "",
                companyType: companyData.companyType || "",
                ownership: companyData.ownership || "",
                email: companyData.email || "",
                phone: companyData.phone || "",
                fax: companyData.fax || "",
                website: companyData.website || "",
                address: companyData.address || "",
                foundedYear: companyData.foundedYear || "",
                founders: companyData.founders || [],
                ceo: companyData.ceo || "",
                boardMembers: companyData.boardMembers || [],
                employees: companyData.employees || "",
                // branches: companyData.branches || [],
                annualRevenue: companyData.annualRevenue || "",
                valuation: companyData.valuation || "",
                stockSymbol: companyData.stockSymbol || "",
                isListed: companyData.isListed ?? false,
                status: companyData.status ?? false,
                licenses: companyData.licenses || [],
                taxId: companyData.taxId || "",
                regulatoryBody: companyData.regulatoryBody || "",
                logoUrl: companyData.logoUrl || "",
                socialLinks: companyData.socialLinks || [],
                about: companyData.about || ""
            });
        } else {
            // reset form when adding a new company
            setFormData({
                name: "",
                legalName: "",
                registrationNumber: "",
                industry: "",
                subIndustry: "",
                companyType: "",
                ownership: "",
                email: "",
                phone: "",
                fax: "",
                website: "",
                address: "",
                foundedYear: "",
                founders: [],
                ceo: "",
                boardMembers: [],
                employees: "",
                // branches: [],
                annualRevenue: "",
                valuation: "",
                stockSymbol: "",
                isListed: false,
                status: false,
                licenses: [],
                taxId: "",
                regulatoryBody: "",
                logoUrl: "",
                socialLinks: [],
                about: ""
            });
        }
    }, [companyData, open]);


    const handleSubmit = async () => {
        try {
            setLoading(true);
            const url = companyData
                ? `http://localhost:9000/company/update/${companyData._id}`
                : "http://localhost:9000/company/creation";

            const response = companyData
                ? await axios.put(url, formData)
                : await axios.post(url, formData);

            if (response?.data?.status === true) {
                toast.success(response.data.message);
                handleClose();
                refreshList()
            } else {
                toast.error(response.data.message || "Error saving company");
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleDialogClose = () => {
        setFormData({
            name: "",
            legalName: "",
            registrationNumber: "",
            industry: "",
            subIndustry: "",
            companyType: "",
            ownership: "",
            email: "",
            phone: "",
            fax: "",
            website: "",
            address: "",
            foundedYear: "",
            founders: [],
            ceo: "",
            boardMembers: [],
            employees: "",
            // branches: [],
            annualRevenue: "",
            valuation: "",
            stockSymbol: "",
            isListed: false,
            status: false,
            licenses: [],
            taxId: "",
            regulatoryBody: "",
            logoUrl: "",
            socialLinks: [],
            about: ""
        });
        handleClose();
    };
    
    return (
        <>
            <CustomModal
                open={open}
                onClose={handleDialogClose}
                title={companyData ? "Edit Company Details" : "Add New Company Details"}
                maxWidth={maxWidth}
                actions={
                    <>
                        <CustomButton
                            variant="outlined"
                            onClick={handleDialogClose}
                            label={"Cancel"}
                            disabled={loading}
                        />
                        <CustomButton
                            variant="contained"
                            onClick={handleSubmit}
                            label={"Save"}
                            disabled={loading}
                        />
                    </>
                }
                content={
                    <>
                        <BasicInfo formData={formData} setFormData={setFormData} companyOptions={companyOptions} handleChange={handleChange} />
                        <ContactInfo formData={formData} handleChange={handleChange} />
                        <OperationalInfo formData={formData} handleChange={handleChange} handleChangeArray={handleChangeArray} />
                        <FinancialInfo formData={formData} setFormData={setFormData} booleanOptions={booleanOptions} handleChange={handleChange} />
                        <ComplianceInfo formData={formData} setFormData={setFormData} statusOptions={statusOptions} handleChange={handleChange} handleChangeArray={handleChangeArray} />
                        <BrandingInfo formData={formData} handleChange={handleChange} handleChangeArray={handleChangeArray} />
                    </>
                }
            />
        </>
    )
}

export default CompanyModal