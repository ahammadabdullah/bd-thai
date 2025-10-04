import { type QuotationType } from "../tables/quotations-table";

interface QuotationTemplateProps {
  quotation: QuotationType;
}

function QuotationTemplate({ quotation }: QuotationTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header / Branding */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "24px",
          borderBottom: "2px solid #002D62",
          paddingBottom: "12px",
        }}
      >
        <h1 style={{ color: "#002D62", margin: 0 }}>BD Thai Food</h1>
      </div>

      {/* Greeting */}
      <p style={{ marginBottom: "16px", color: "#374151" }}>
        Hi {quotation.name},
      </p>

      {/* Main message */}
      <p style={{ marginBottom: "24px", color: "#374151" }}>
        Thank you for reaching out to <strong>BD Thai Food</strong> through our
        website. We have received your quotation request and our team will
        review it promptly.
      </p>

      <p style={{ marginBottom: "16px", color: "#374151" }}>
        Here’s a summary of the details you submitted:
      </p>

      {/* Table with user-submitted details */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "24px",
        }}
      >
        <tbody>
          {[
            ["Name", quotation.name],
            ["Email", quotation.email],
            ["Company", quotation.company_name],
            ["Product Interest", quotation.interest],
            ["Order Volume", quotation.order_volume],
            ["Message", quotation.message],
          ].map(([label, value]) => (
            <tr key={label}>
              <td
                style={{
                  padding: "8px",
                  border: "1px solid #e5e7eb",
                  fontWeight: "bold",
                  backgroundColor: "#f9fafb",
                  width: "30%",
                }}
              >
                {label}
              </td>
              <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Closing message */}
      <p style={{ marginBottom: "16px", color: "#374151" }}>
        Our team at <strong>BD Thai Food</strong> will carefully review your
        request and contact you with a quotation as soon as possible. You can
        reply to this email if you have additional questions.
      </p>

      <p style={{ color: "#002D62", fontWeight: "bold", marginBottom: "16px" }}>
        Thank you,
        <br />
        The BD Thai Food Team
      </p>

      {/* Footer / automated note */}
      <div
        style={{
          marginTop: "32px",
          fontSize: "12px",
          color: "#6b7280",
          borderTop: "1px solid #e5e7eb",
          paddingTop: "16px",
        }}
      >
        This is an automated email from <strong>BD Thai Food</strong> confirming
        your quotation request.
      </div>
    </div>
  );
}

export default QuotationTemplate;
