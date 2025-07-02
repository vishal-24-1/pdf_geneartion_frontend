import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Report from "./pages/Report.jsx";

function Home() {
  const handleDownload = async () => {
    try {
      const response = await fetch("http://localhost:8080/generate-pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "inzighted_report.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Failed to download PDF");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-blue-500 text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={handleDownload}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Download Report PDF
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
