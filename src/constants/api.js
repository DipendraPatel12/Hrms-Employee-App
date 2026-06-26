import Config from "react-native-config";
export const API_ENDPOINTS = {
    BASE_URL: Config.API_BASE_URL,

    // Authentication Endpoints
    AUTH: {
        LOGIN: "/auth/login",
        SIGNUP: "/auth/signup",
        LOGOUT: "/auth/logout",
        FORGOT_PASSWORD: "/auth/forgot-password",
        VERIFY_OTP: "/auth/forgot-password/verify-otp",
        RESET_PASSWORD: "/auth/forgot-password/reset",
    },

    // Dashboard Endpoints
    DASHBOARD: {
        GET_DASHBOARD: "/dashboard",
    },

    // Employee Endpoints
    EMPLOYEE: {
        GET_ALL: "/employee",
        CREATE: "/employee",
        GET_BY_ID: "/employee/:id",
        UPDATE: "/employee/:id",
        DELETE: "/employee/:id",
        LEAVE_POLICIES: "/employee/:id/leave-policies",
        CURRENT_PROJECTS: "/employee/:id/current-projects",
        PAST_PROJECTS: "/employee/:id/past-projects",
        PROJECT_DETAIL: "/employee/:id/projects/:projectId",
    },

    // RBAC Endpoints
    RBAC: {
        MODULES: "/rbac/modules",
        ROLES: "/rbac/roles",
        ROLE_BY_ID: "/rbac/roles/:id",
        ROLE_PERMISSIONS: "/rbac/roles/:id/permissions",
        EMPLOYEE_ROLES: "/rbac/employees/:id/roles",
        EMPLOYEE_PERMISSIONS: "/rbac/employees/:id/permissions",
    },

    // Upload Endpoint
    UPLOAD: "/upload",

    // Attendance Endpoints
    ATTENDANCE: {
        GET_ALL: "/attendance",
        GET_BY_ID: "/attendance/:id",
        CREATE: "/attendance/create",
        UPDATE: "/attendance/:id",
    },

    // Payroll Endpoints
    PAYROLL: {
        GET_ALL: "/payroll",
        GET_BY_ID: "/payroll/:id",
        CREATE: "/payroll/create",
    },

    // Documents Endpoints
    DOCUMENTS: {
        GET_ALL: "/documents",
        GET_BY_ID: "/documents/:id",
        UPLOAD: "/documents/upload",
        DELETE: "/documents/:id",
    },

    // Contracts Endpoints
    CONTRACTS: {
        GET_ALL: "/contracts",
        GET_BY_ID: "/contracts/:id",
        CREATE: "/contracts/create",
        UPDATE: "/contracts/:id",
    },

    // Leaves Endpoints
    LEAVES: {
        APPLY: "/leave-requests",
        GET_ALL: "/leaves",
        GET_BY_ID: "/leaves/:id",
        GET_POLICY: "/leaves/policy",
        GET_CALENDAR: "/leaves/calendar",
        APPROVE: "/leaves/:id/approve",
        REJECT: "/leaves/:id/reject",
        CONFIGURE_LEAVE: "/leave-types",
        GET_ALL_LEAVES_TYPES: "/leave-types",
        DELETE_LEAVE_TYPE_BY_ID: "/leave-types/:id",
        UPDATE_LEAVE_TYPE_BY_ID: "/leave-types/:id",
        MY_LEAVES: "leave-requests/my"
    },

    // Holidays Endpoints
    HOLIDAYS: {
        GET_ALL: "/holidays",
        GET_BY_ID: "/holidays/:id",
        CREATE: "/holidays",
        UPDATE: "/holidays/:id",
        DELETE: "/holidays/:id",
    },

    // Projects Endpoints
    PROJECTS: {
        GET_ALL: "/project",
        GET_BY_ID: "/project/:id",
        CREATE: "/project",
        UPDATE: "/project/:id",
        DELETE: "/project/:id",
        GET_EMPLOYEES: "/project/:id/employees",
        ASSIGN_EMPLOYEES: "/project/:id/assign-employees",
        REMOVE_EMPLOYEE: "/project/:id/employees/:employeeId",
    },

    // Head Offices Endpoints
    HEAD_OFFICES: {
        GET_ALL: "/office",
        GET_BY_ID: "/office/:id",
        CREATE: "/office",
        UPDATE: "/office/:id",
        DELETE: "/office/:id",
    },

    // Leave Policies Endpoints
    LEAVE_POLICIES: {
        GET_ALL: "/leave-policies",
        GET_BY_ID: "/leave-policies/:id",
    },

    // Employee Dependents Endpoints
    DEPENDENTS: {
        GET_ALL: "/employee/:employeeId/dependents",
        CREATE: "/employee/:employeeId/dependents",
        UPDATE: "/employee/:employeeId/dependents/:depId",
        DELETE: "/employee/:employeeId/dependents/:depId",
    },

    // Approval Groups Endpoints
    APPROVAL_GROUPS: {
        GET_ALL: "/approval-groups",
        GET_BY_ID: "/approval-groups/:id",
        CREATE: "/approval-groups",
        UPDATE: "/approval-groups/:id",
        DELETE: "/approval-groups/:id",
    },

    // Approval action flow (approver inbox) — approver resolved from the token
    APPROVALS: {
        PENDING: "/approvals/pending",
        ACTION: "/approvals/:id/action",
        CANCEL: "/approvals/:id/cancel",
    },

    // Approval assignments — bind a purpose/module to an approval group
    APPROVAL_ASSIGNMENTS: {
        GET_ALL: "/approval-assignments",
        SET: "/approval-assignments/:moduleKey",
    },

    // Staffing Companies Endpoints
    STAFFING_COMPANIES: {
        GET_ALL: "/staffing-companies",
        GET_BY_ID: "/staffing-companies/:id",
        CREATE: "/staffing-companies",
        UPDATE: "/staffing-companies/:id",
        DELETE: "/staffing-companies/:id",
        GET_INVOICE: "/staffing-companies/:id/invoice",
    },

    // Invoices Endpoints
    INVOICES: {
        GET_ALL: "/invoices",
        GET_BY_ID: "/invoices/:id",
        CREATE: "/invoices/create",
        UPDATE: "/invoices/:id",
        DELETE: "/invoices/:id",
    },

    // Settings Endpoints
    SETTINGS: {
        GET_ALL: "/settings",
        UPDATE: "/settings/:id",
    },
};