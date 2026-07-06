"use server";
import { supabase } from "@/lib/supabase";

export async function getActiveAnnouncements() {
  const { data, error } = await supabase
    .from("moving_announcements")
    .select("*")
    .eq("is_active", true);

  if (error) {
    console.error("Error fetching announcements:", error);
    return [];
  }
  return data;
}

export async function getUpcomingEvents() {
  const { data, error } = await supabase
    .from("school_events")
    .select("*")
    .order("event_date", { ascending: true })
    .limit(3);

  if (error) {
    console.error("Error fetching events:", error);
    return [];
  }
  return data;
}

export async function submitAdmission(formData: any) {
  // In a real app, you might want to handle file uploads to Supabase storage here, 
  // or handle them on the client side and just pass the URLs here.
  // We'll assume the URLs are passed in formData.
  const { data, error } = await supabase
    .from("admission_submissions")
    .insert([
      {
        student_name: formData.studentName,
        father_name: formData.fatherName,
        grade_applied: formData.grade,
        parent_phone: formData.phone,
        parent_email: formData.email,
        status: "pending",
        photo_url: formData.photoUrl || null,
        birth_certificate_url: formData.birthCertificateUrl || null,
        report_card_url: formData.reportCardUrl || null,
      }
    ]);

  if (error) {
    throw new Error(error.message);
  }
  return { success: true };
}

export async function submitComplaint(formData: any) {
  const { data, error } = await supabase
    .from("complaints")
    .insert([
      {
        complainant_name: formData.name,
        contact_info: formData.contactInfo,
        complaint_type: formData.type,
        message: formData.message,
        resolved: false
      }
    ]);

  if (error) {
    throw new Error(error.message);
  }
  return { success: true };
}
