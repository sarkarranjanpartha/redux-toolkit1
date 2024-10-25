import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Root {
  items: Employee[];
  first: First;
}

interface Employee {
  uri: Uri;
  collection_id: number;
  employee_id: number;
  employee_name: string;
  job: string;
  manager_id?: number;
  hiredate: string;
  salary: number;
  commision?: number;
  department_id: number;
  media_type?: string;
  media_title?: string;
  media_url?: string;
}

interface Uri {
  $ref: string;
}

interface First {
  $ref: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apex.oracle.com/pls/apex/partharanjansarkar/restful",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchEmployees: builder.query<Employee[], number | void>({
        query(limit = 10) {
          return `/employeesfeed`;
        },
      }),
    };
  },
});

export const { useFetchEmployeesQuery } = apiSlice;
