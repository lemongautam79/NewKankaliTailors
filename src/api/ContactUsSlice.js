import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice";

const contactusAdapter = createEntityAdapter();

const initialState = contactusAdapter.getInitialState();

export const ContactUsSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        //! GET all the contacts
        getAllContacts: builder.query({
            query: () => ({
                url: `contacts`,
                method: 'GET'
            }),
            providesTags: ['ContactUS']
        }),

        // //! GET contact by id
        // getContactsById: builder.query({
        //     query: (id) => ({
        //         url: `contact/company-wise-contact/?contact_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['ContactUS']
        // }),


        // //! GET contact by id
        // getContactsWithoutPagination: builder.query({
        //     query: () => ({
        //         url: `contact/company-wise-contact-with-out-pagination/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['ContactUS']
        // }),


        // //! GET contact category
        // getContactsCategory: builder.query({
        //     query: () => ({
        //         url: `contact/company-wise-contact-category/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['ContactUS']
        // }),

        // //! GET contact category id
        // getContactsCategoryById: builder.query({
        //     query: (id) => ({
        //         url: `contact/company-category-wise-contact/?contact_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['ContactUS']
        // }),

        // //! GET contact area
        // getContactsArea: builder.query({
        //     query: () => ({
        //         url: `contact/company-wise-contact-working-area/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['ContactUS']
        // }),

        // //! GET contact area id
        // getContactsAreaById: builder.query({
        //     query: (id) => ({
        //         url: `contact/company-area-wise-contact/?contact_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['ContactUS']
        // }),


        // //! DELETE contact by id
        // deleteContactsById: builder.mutation({
        //     query: (id) => {
        //         return {
        //             url: `contact/company-wise-contact/${id}/`,
        //             method: 'DELETE',
        //             body: id
        //         }
        //     },
        //     invalidatesTags: ['ContactUS']
        // }),

        // //! DELETE contact category by id
        // deleteContactsCategoryById: builder.mutation({
        //     query: (id) => {
        //         return {
        //             url: `contact/company-wise-contact-category/${id}/`,
        //             method: 'DELETE',
        //             body: id
        //         }
        //     },
        //     invalidatesTags: ['ContactUS']
        // }),

        // //! POST contact 
        createContacts: builder.mutation({
            query: (newContactUS) => {
                return {
                    url: `contacts/`,
                    method: 'POST',
                    body: newContactUS,
                }
            },
            invalidatesTags: ['ContactUS']
        }),

        // //! send mail 
        sendMail: builder.mutation({
            query: (newContacts) => {
                return {
                    url: `sendmail/`,
                    method: 'POST',
                    body: newContacts,
                }
            },
            invalidatesTags: ['ContactUS']
        }),

        // //! POST contact category
        // createContactsCategory: builder.mutation({
        //     query: (newContactUS) => {
        //         newContactUS.company_id = Cookies.get("company_id")
        //         return {
        //             url: `contact/company-wise-contact-category/`,
        //             method: 'POST',
        //             body: newContactUS,
        //             // headers: {
        //             //     'Content-type': 'application/json; charset = UTF-8',
        //             // }
        //         }
        //     },
        //     invalidatesTags: ['ContactUS']
        // }),

        // //! Search ContactUS wala post
        // searchContacts: builder.mutation({
        //     query: (searchContactUS) => {
        //         // 
        //         return {
        //             url: `contact/company-wise-contact/search_contact/`,
        //             method: 'POST',
        //             body: searchContactUS,
        //             // body: { ...searchContactUS, company_id },
        //             headers: {
        //                 'Content-type': 'application/json; charset = UTF-8'
        //             }
        //         }
        //     },
        //     invalidatesTags: ['ContactUS']
        // }),

        // //! Update contact data by id
        // updateContacts: builder.mutation({
        //     query: (updateContactUS) => {
        //         return {
        //             url: `contact/contact/${updateContactUS.get('id')}/`,
        //             method: 'PATCH',
        //             body: updateContactUS
        //         }
        //     },
        //     invalidatesTags: ['ContactUS'],
        //     async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        //         const patchResult = dispatch(
        //             apiSlice.util.updateQueryData('getAllContacts', id, (draft) => {
        //                 Object.assign(draft, patch)
        //             })
        //         )
        //         try {
        //             await queryFulfilled
        //         } catch {
        //             patchResult.undo()
        //         }
        //     },
        // }),

        // //! Update contact category by id
        // updateContactsCategory: builder.mutation({
        //     query: (updateContactUSCategory) => {
        //         return {
        //             url: `contact/company-wise-contact-category/${updateContactUSCategory.get('id')}/`,
        //             method: 'PUT',
        //             body: updateContactUSCategory
        //         }
        //     },
        //     invalidatesTags: ['ContactUS'],
        //     async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        //         const patchResult = dispatch(
        //             apiSlice.util.updateQueryData('getAllContacts', id, (draft) => {
        //                 Object.assign(draft, patch)
        //             })
        //         )
        //         try {
        //             await queryFulfilled
        //         } catch {
        //             patchResult.undo()
        //         }
        //     },
        // }),
    })
})

export const {
    useGetAllContactsQuery,
    // useGetContactsByIdQuery,
    // useGetContactsAreaQuery,
    // useGetContactsAreaByIdQuery,
    // useGetContactsCategoryQuery,
    // useGetContactsCategoryByIdQuery,
    // useDeleteContactsByIdMutation,
    // useDeleteContactsCategoryByIdMutation,
    useCreateContactsMutation,
    useSendMailMutation,
    // useCreateContactsCategoryMutation,
    // useUpdateContactsMutation,
    // useUpdateContactsCategoryMutation,
    // useSearchContactsMutation,
    // useGetContactsWithoutPaginationQuery,
} = ContactUsSlice

//! returns the query result object
export const selectContactsResult = ContactUsSlice.endpoints.getAllContacts.select()

//!Creates memoized selector
const selectContactsData = createSelector(
    selectContactsResult,
    contactResult => contactResult.data // normalized state object with ids & entities
)

//!getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllContacts,
    selectById: selectContactsById,
    selectIds: selectIds
    // Pass in a selector that returns the posts slice of state
} = contactusAdapter.getSelectors(state => selectContactsData(state) ?? initialState)



