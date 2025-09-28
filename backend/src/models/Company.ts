import mongoose, { Document, Schema } from "mongoose";


export interface ICompany extends Document {
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
    branches?: {
        country: string;
        address: string;
    }[];
    annualRevenue?: number;
    valuation?: number;
    stockSymbol?: string;
    isListed?: boolean;
    status: boolean;
    licenses?: string[];
    taxId?: string;
    regulatoryBody?: string;
    logoUrl?: string;
    socialLinks?: string[];
    about?: string;
}

const CompanySchema: Schema = new Schema(
    {
        name: { type: String, required: [true, "Company name is required"] },
        legalName: { type: String },
        registrationNumber: { type: String, unique: true, required: [true, "Registration number is required"], },
        industry: { type: String, required: [true, "Industry is required"] },
        subIndustry: { type: String },
        companyType: {
            type: String, enum: ["Public", "Private", "Partnership", "Government"],
            required: [true, "Company type is required"],
        },
        ownership: { type: String },
        email: { type: String, required: [true, "Email is required"] },
        phone: { type: String, required: [true, "Phone Number is required"] },
        fax: { type: String },
        website: { type: String },
        address: { type: String, required: [true, "Address is required"] },
        foundedYear: { type: Number },
        founders: [{ type: String }],
        ceo: { type: String, required: [true, "CEO is required"] },
        boardMembers: [{ type: String, required: [true, "Board Members is required"] }],
        employees: { type: Number },
        branches: [
            {
                country: String,
                address: String,
            }
        ],
        annualRevenue: { type: Number },
        valuation: { type: Number },
        stockSymbol: { type: String },
        isListed: { type: Boolean, default: false },
        status: { type: Boolean, default: true },
        licenses: [{ type: String }],
        taxId: { type: String },
        regulatoryBody: { type: String },
        logoUrl: { type: String },
        socialLinks: [{ type: String }],
        about: { type: String }
    },
    { timestamps: true }
);

export default mongoose.model<ICompany>("Company", CompanySchema)