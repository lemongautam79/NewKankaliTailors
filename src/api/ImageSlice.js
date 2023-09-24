import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice";

const imageAdapter = createEntityAdapter();

const initialState = imageAdapter.getInitialState();

export const ImageSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        //! GET all the images
        getAllImages: builder.query({
            query: () => ({
                url: `get-image`,
                method: 'GET'
            }),
            providesTags: ['Image']
        }),

        // //! GET image by id
        // getImagesById: builder.query({
        //     query: (id) => ({
        //         url: `image/company-wise-image/?image_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Image']
        // }),


        // //! GET image by id
        // getImagesWithoutPagination: builder.query({
        //     query: () => ({
        //         url: `image/company-wise-image-with-out-pagination/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Image']
        // }),


        // //! GET image category
        // getImagesCategory: builder.query({
        //     query: () => ({
        //         url: `image/company-wise-image-category/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Image']
        // }),

        // //! GET image category id
        // getImagesCategoryById: builder.query({
        //     query: (id) => ({
        //         url: `image/company-category-wise-image/?image_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Image']
        // }),

        // //! GET image area
        // getImagesArea: builder.query({
        //     query: () => ({
        //         url: `image/company-wise-image-working-area/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Image']
        // }),

        // //! GET image area id
        // getImagesAreaById: builder.query({
        //     query: (id) => ({
        //         url: `image/company-area-wise-image/?image_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Image']
        // }),


        // //! DELETE image by id
        // deleteImagesById: builder.mutation({
        //     query: (id) => {
        //         return {
        //             url: `image/company-wise-image/${id}/`,
        //             method: 'DELETE',
        //             body: id
        //         }
        //     },
        //     invalidatesTags: ['Image']
        // }),

        // //! DELETE image category by id
        // deleteImagesCategoryById: builder.mutation({
        //     query: (id) => {
        //         return {
        //             url: `image/company-wise-image-category/${id}/`,
        //             method: 'DELETE',
        //             body: id
        //         }
        //     },
        //     invalidatesTags: ['Image']
        // }),

        // //! POST image 
        createImages: builder.mutation({
            query: (newImage) => {
                return {
                    url: `images/`,
                    method: 'POST',
                    body: newImage,
                }
            },
            invalidatesTags: ['Image']
        }),

        // //! POST image category
        // createImagesCategory: builder.mutation({
        //     query: (newImage) => {
        //         newImage.company_id = Cookies.get("company_id")
        //         return {
        //             url: `image/company-wise-image-category/`,
        //             method: 'POST',
        //             body: newImage,
        //             // headers: {
        //             //     'Content-type': 'application/json; charset = UTF-8',
        //             // }
        //         }
        //     },
        //     invalidatesTags: ['Image']
        // }),

        // //! Search Image wala post
        // searchImages: builder.mutation({
        //     query: (searchImage) => {
        //         // 
        //         return {
        //             url: `image/company-wise-image/search_image/`,
        //             method: 'POST',
        //             body: searchImage,
        //             // body: { ...searchImage, company_id },
        //             headers: {
        //                 'Content-type': 'application/json; charset = UTF-8'
        //             }
        //         }
        //     },
        //     invalidatesTags: ['Image']
        // }),

        // //! Update image data by id
        // updateImages: builder.mutation({
        //     query: (updateImage) => {
        //         return {
        //             url: `image/image/${updateImage.get('id')}/`,
        //             method: 'PATCH',
        //             body: updateImage
        //         }
        //     },
        //     invalidatesTags: ['Image'],
        //     async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        //         const patchResult = dispatch(
        //             apiSlice.util.updateQueryData('getAllImages', id, (draft) => {
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

        // //! Update image category by id
        // updateImagesCategory: builder.mutation({
        //     query: (updateImageCategory) => {
        //         return {
        //             url: `image/company-wise-image-category/${updateImageCategory.get('id')}/`,
        //             method: 'PUT',
        //             body: updateImageCategory
        //         }
        //     },
        //     invalidatesTags: ['Image'],
        //     async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        //         const patchResult = dispatch(
        //             apiSlice.util.updateQueryData('getAllImages', id, (draft) => {
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
    useGetAllImagesQuery,
    // useGetImagesByIdQuery,
    // useGetImagesAreaQuery,
    // useGetImagesAreaByIdQuery,
    // useGetImagesCategoryQuery,
    // useGetImagesCategoryByIdQuery,
    // useDeleteImagesByIdMutation,
    // useDeleteImagesCategoryByIdMutation,
    useCreateImagesMutation,
    // useCreateImagesCategoryMutation,
    // useUpdateImagesMutation,
    // useUpdateImagesCategoryMutation,
    // useSearchImagesMutation,
    // useGetImagesWithoutPaginationQuery,
} = ImageSlice

//! returns the query result object
export const selectImagesResult = ImageSlice.endpoints.getAllImages.select()

//!Creates memoized selector
const selectImagesData = createSelector(
    selectImagesResult,
    imageResult => imageResult.data // normalized state object with ids & entities
)

//!getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllImages,
    selectById: selectImagesById,
    selectIds: selectIds
    // Pass in a selector that returns the posts slice of state
} = imageAdapter.getSelectors(state => selectImagesData(state) ?? initialState)



