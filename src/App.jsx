import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "./pages/Report.jsx";
import { useState } from "react";

function Home() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch("https://pdf.inzighted.com/generate-pdf", {
        method: "GET",
        headers: {
          "Accept": "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const blob = await response.blob();

      // Optional: validate content type
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/pdf")) {
        throw new Error("Invalid content type");
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "inzighted_report.pdf";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err.message);
      alert("Failed to download PDF. Check network or server status.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-blue-500 text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 disabled:opacity-50"
      >
        {downloading ? "Downloading..." : "Download Report PDF"}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/report" element={<Report />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
