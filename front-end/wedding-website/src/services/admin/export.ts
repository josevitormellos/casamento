import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { Confirmation } from "./admin";

function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("pt-BR");
}

export function exportConfirmationsCsv(
    confirmations: Confirmation[]
): void {
    const headers = [
        "ID",
        "Nome",
        "Telefone",
        "E-mail",
        "Restrição alimentar",
        "Tipo de restrição",
        "Tamanho do calçado",
        "Mensagem",
        "Data da confirmação",
    ];

    const rows = confirmations.map((confirmation) => [
        confirmation.id,
        confirmation.name,
        confirmation.phone,
        confirmation.email,
        confirmation.hasDietaryRestriction ? "Sim" : "Não",
        confirmation.dietaryRestriction || "",
        confirmation.shoeSize || "",
        confirmation.message || "",
        formatDate(confirmation.confirmedAt),
    ]);

    const csv = [
        headers,
        ...rows,
    ]
        .map((row) =>
            row
                .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
                .join(";")
        )
        .join("\n");

    const blob = new Blob(
        ["\uFEFF" + csv],
        {
            type: "text/csv;charset=utf-8;",
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "confirmacoes-casamento.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

export function exportConfirmationsPdf(
    confirmations: Confirmation[]
): void {
    const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
    });

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);

    pdf.text(
        "Confirmações de presença",
        14,
        18
    );

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    pdf.text(
        `Total de confirmações: ${confirmations.length}`,
        14,
        26
    );

    const rows = confirmations.map((confirmation) => [
        confirmation.name,
        confirmation.phone,
        confirmation.email,
        confirmation.hasDietaryRestriction
            ? confirmation.dietaryRestriction || "Sim"
            : "Não",
        confirmation.shoeSize || "—",
        confirmation.message || "—",
        formatDate(confirmation.confirmedAt),
    ]);

    autoTable(pdf, {
        startY: 32,
        head: [[
            "Nome",
            "Telefone",
            "E-mail",
            "Restrição",
            "Calçado",
            "Mensagem",
            "Data",
        ]],
        body: rows,
        styles: {
            fontSize: 7,
            cellPadding: 2,
            valign: "top",
        },
        headStyles: {
            fontStyle: "bold",
        },
        columnStyles: {
            0: { cellWidth: 35 },
            1: { cellWidth: 28 },
            2: { cellWidth: 45 },
            3: { cellWidth: 35 },
            4: { cellWidth: 18 },
            5: { cellWidth: 65 },
            6: { cellWidth: 22 },
        },
    });

    pdf.save("confirmacoes-casamento.pdf");
}