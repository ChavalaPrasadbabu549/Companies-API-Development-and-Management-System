// Table  interfaces
export interface TableColumn {
    field: string;
    label: string;
    width?: string | number;
    textAlign?: 'left' | 'center' | 'right';
}

export interface TableAction {
    label: string;
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning';
    icon: React.ReactNode;
    onClick?: () => void;
}

export interface CustomTableProps {
    columns: TableColumn[];
    rows: Record<string, any>[];
    rowsPerPageOptions?: number[];
}

//company interfaces
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
//company modal interfaces
export interface CompanyModalProps {
    open: boolean;
    handleClose: () => void;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    companyData?: Company | null;
    refreshList: () => void;
}

//language interface
export interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
}

//theme interface
export interface ThemeContextType {
    themeMode: "light" | "dark";
    setThemeMode: (mode: "light" | "dark") => void;
}