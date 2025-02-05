"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const CategorySchema = z.object({
    name: z.string().min(1, "Category name is required"),
    description: z.string().nonempty("Description is required"),
})



export const getCategories = async (filter=false) => {
    let categories

    if(!filter){
         categories = await prisma.category.findMany({})
    }else{
        categories = await prisma.category.findMany({
            where: {
                isActive: true,
            },
        })
    }

    return categories
}


export async function createCategory(prevData, formData: FormData) {

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const validatedFields = CategorySchema.safeParse({
        name,
        description
    })


    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors }
    }

    try {
        const category = await prisma.category.create({
            data: {
                name,
                description
            }
        })
    }
    catch (e) {
        if (e?.code === "P2002") {
            return {
                error: {
                    name: "Category name already exists"
                }
            }
        }
    }

    revalidatePath("admin/jobs/categories")

    return {
        success: true,
        message: "Category created successfully"
    }

}

export async function updateCategory(prevData, formData: FormData) {

    const id = Number(formData.get("id"))
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const isActive = Boolean(formData.get("isActive"));

    const validatedFields = CategorySchema.safeParse({
        name,
        description
    })

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors }
    }

    try {
        const category = await prisma.category.update({
            where: {
                id
            },
            data: {
                name,
                description,
                isActive
            }
        })
    }
    catch (e) {
        if (e?.code === "P2002") {
            return {
                error: {
                    name: "Category name already exists"
                }
            }
        }
    }

    revalidatePath("admin/jobs/categories")

    return {
        success: true,
        message: "Category updated successfully"
    }

}

export async function deleteCategory(prevData, formData: FormData) {
    const id = Number(formData.get("id"))
    // Here you would typically delete the category from a database
    try {
        await prisma.category.delete({
            where: {
                id
            }
        })
    }
    catch (e) {
        return {
            error: "Something went wrong"
        }
    }
    revalidatePath("admin/jobs/categories")
    return { success: true }
}