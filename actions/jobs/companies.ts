"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod"

const CompanySchema = z.object({
    name: z.string().min(1, "Category name is required"),
    description: z.string().nonempty("Description is required"),
    logo: z.string().url("Linkedin link need to be url").or(z.literal("")),
    website: z.string().url("Website link need to be url").nonempty("Website link is required"),
    linkedinURL: z.string().url("Linkedin link need to be url").or(z.literal("")),
    twitterURL: z.string().url("Twitter link need to be url").or(z.literal("")),
    industry: z.string().nonempty("Industry is required"),
    remotePolicy: z.string().nonempty("Remote policy is required"),
    size: z.string().nonempty("Size is required")
})

export const getAllCompanies = async () => {
    const companies = await prisma.company.findMany({});
    return companies
}


export const getAllCompaniesByUserId = async (userId: string) => {
    const companies = await prisma.company.findMany({
        where: {
            userId: userId
        }
    });
    return companies
}

export const addCompany = async (prevData,formData: FormData) => {

    const session = await auth()
    if (!session?.user) {
        return {
            error: "You must be logged in to add a company"
        }
    }

    let userID = session.user.id as string

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const logo = formData.get("logo") as string;
    const website = formData.get("website") as string;
    const linkedinURL = formData.get("linkedinURL") as string;
    const twitterURL = formData.get("twitterURL") as string;
    const industry = formData.get("industry") as string;
    const size = formData.get("size") as string;
    const remotePolicy = formData.get("remotePolicy") as string;

    const validatedFields = CompanySchema.safeParse({
        name,
        description,
        logo,
        website,
        linkedinURL,
        twitterURL,
        industry,
        size,
        remotePolicy
    })

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors }
    }
        try {
            const category = await prisma.company.create({
                data: {
                    name,
                    description,
                    logo,
                    website,
                    linkedinURL,
                    twitterURL,
                    industry,
                    size,
                    remotePolicy,
                    userId: userID
                }
            })
        }
        catch (e) {
            if (e?.code === "P2002") {
                return {
                    error: {
                        name: "Company already exists"
                    }
                }
            }
        }
    
        revalidatePath("/employer/companies")
        redirect("/employer/companies")

}

export const updateCompany = async (prevData,formData: FormData) => {

    const session = await auth()
    if (!session?.user) {
        return {
            error: "You must be logged in to add a company"
        }
    }

    let userID = session.user.id as string

    const companyId = Number(formData.get("id"))
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const logo = formData.get("logo") as string;
    const website = formData.get("website") as string;
    const linkedinURL = formData.get("linkedinURL") as string;
    const twitterURL = formData.get("twitterURL") as string;
    const industry = formData.get("industry") as string;
    const size = formData.get("size") as string;
    const remotePolicy = formData.get("remotePolicy") as string;

    const validatedFields = CompanySchema.safeParse({
        name,
        description,
        logo,
        website,
        linkedinURL,
        twitterURL,
        industry,
        size,
        remotePolicy
    })

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors }
    }
        try {
            const category = await prisma.company.update({
                where: {    
                    id: companyId
                },
                data: {
                    name,
                    description,
                    logo,
                    website,
                    linkedinURL,
                    twitterURL,
                    industry,
                    size,
                    remotePolicy,
                    userId: userID
                }
            })
        }
        catch (e) {
            if (e?.code === "P2002") {
                return {
                    error: {
                        name: "Company already exists"
                    }
                }
            }
        }
    
        revalidatePath("/employer/companies")
        redirect("/employer/companies")

}

export async function deleteCompany(id:Number) {
    const companyId = Number(id)
    try {
        await prisma.company.delete({
            where: {
                id:companyId
            }
        })
    }
    catch (e) {
        return {
            error: "Something went wrong"
        }
    }
    revalidatePath("/employer/companies")
    redirect("/employer/companies")

}