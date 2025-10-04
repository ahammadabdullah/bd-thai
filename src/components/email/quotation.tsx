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
      <h2 style={{ color: "#111827", marginBottom: "16px" }}>
        📩 New Quotation Request
      </h2>

      <p style={{ marginBottom: "24px", color: "#374151" }}>
        A new quotation inquiry has been submitted through your website. Below
        are the details:
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "24px",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #e5e7eb",
                fontWeight: "bold",
                backgroundColor: "#f9fafb",
                width: "30%",
              }}
            >
              Name
            </td>
            <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>
              {quotation.name}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #e5e7eb",
                fontWeight: "bold",
                backgroundColor: "#f9fafb",
              }}
            >
              Email
            </td>
            <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>
              {quotation.email}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #e5e7eb",
                fontWeight: "bold",
                backgroundColor: "#f9fafb",
              }}
            >
              Company
            </td>
            <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>
              {quotation.company_name}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #e5e7eb",
                fontWeight: "bold",
                backgroundColor: "#f9fafb",
              }}
            >
              Product Interest
            </td>
            <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>
              {quotation.interest}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #e5e7eb",
                fontWeight: "bold",
                backgroundColor: "#f9fafb",
              }}
            >
              Order Volume
            </td>
            <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>
              {quotation.order_volume}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #e5e7eb",
                fontWeight: "bold",
                backgroundColor: "#f9fafb",
              }}
            >
              Message
            </td>
            <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>
              {quotation.message}
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ color: "#374151" }}>
        Please follow up with the client as soon as possible.
      </p>

      <div
        style={{
          marginTop: "32px",
          fontSize: "12px",
          color: "#6b7280",
          borderTop: "1px solid #e5e7eb",
          paddingTop: "16px",
        }}
      >
        This is an automated message from your website’s inquiry form.
      </div>
    </div>
  );
}

export default QuotationTemplate;
