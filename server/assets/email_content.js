const htmlContentTestVersion = (name, number, email) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
    <div style="background-color: #6366f1; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Captured!</h1>
    </div>
    <div style="padding: 30px; background-color: #ffffff;">
        <p style="font-size: 16px; color: #475569;">You have received a new inquiry from your landing page.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #475569;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #475569;">${number}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #475569;">${email}</td>
            </tr>
        </table>

        <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="background-color: #6366f1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to Lead</a>
        </div>
    </div>

    <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
        Sent from your Landing Page System &copy; 2026
    </div>
</div>
`;

const createHTMLForwardEmail = (name, number, email) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
    <div style="background-color: #63f1b6; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Captured!</h1>
    </div>
    <div style="padding: 30px; background-color: #ffffff;">
        <p style="font-size: 16px; color: #475569;">You have received a new inquiry from your landing page.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #475569;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #475569;">${number}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #475569;">${email}</td>
            </tr>
        </table>

        <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="background-color: #6366f1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to Lead</a>
        </div>
    </div>

    <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
        Sent from your Landing Page System &copy; 2026
    </div>
</div>
`;

export default createHTMLForwardEmail;