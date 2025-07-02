import { useEffect } from "react";
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";

export default function Report() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.__PDF_READY__ = true;
        }, 5000); // Give charts 1s to render (tweak as needed)

        return () => clearTimeout(timeout);
    }, []);
    // Top-level metrics
    const metrics = [
        { label: "Mock Test Attended", value: 5 },
        { label: "Overall Performance", value: "85%" },
        { label: "Consistency Score", value: "92%" },
        { label: "Improvement Rate", value: "8%" },
    ];

    // Error distribution pie data
    const errorData = [
        { name: "Conceptual Errors", value: 50 },
        { name: "Calculation Errors", value: 15 },
        { name: "Careless Errors", value: 35 },
    ];
    const COLORS = ["#3B82F6", "#60A5FA", "#9CA3AF"]; // Blue-500, Blue-400, Gray-400


    // Test-wise subject trends
    const trendData = [
        { name: "Test 1", Physics: 60, Chemistry: 120, Botany: 150, Zoology: 160 },
        { name: "Test 2", Physics: 70, Chemistry: 170, Botany: 150, Zoology: 180 },
        { name: "Test 3", Physics: 170, Chemistry: 150, Botany: 160, Zoology: 180 },
        { name: "Test 4", Physics: 150, Chemistry: 50, Botany: 170, Zoology: 160 },
        { name: "Test 5", Physics: 150, Chemistry: 150, Botany: 180, Zoology: 180 },
    ];

    // Subject totals data for bar chart
    const subjectTotals = [
        { subject: "Physics", total: 600 },
        { subject: "Chemistry", total: 640 },
        { subject: "Botany", total: 810 },
        { subject: "Zoology", total: 860 },
    ];

    // SWOT data
    const swot = {
        strength: [
            "Botany: Strong in Plant Physiology, Anatomy, and Population Growth — well-aligned with frequent NEET MCQ patterns.",
            "Zoology: Repeated success in Human Physiology, Biotechnology, and Animal Classification you show strong conceptual recall and clarity.",
            "Chemistry: Consistent performance in Nomenclature, Acids/Bases, and Equilibrium — you apply rules confidently and spot patterns easily.",
            "Physics: Strong grasp of Current Electricity and Photoelectric Effect — you handle numericals with confidence and apply formulas correctly across tests.",
        ],
        weakness: [
            "Botany: Focus on visual stages of Meiosis for potential improvement. Strengthen Seed and fruit formation basics for a potential score boost.",
            "Zoology: Correct Gametogenesis misconceptions on statements for potential score improvement. Reinforce Human Endocrine System concepts; potential area for deeper understanding.",
            "Chemistry: Review Properties and trends; repeated errors indicate potential concept gaps. Clarify Colloidal state concepts like the Tyndall effect for potential gains.",
            "Physics: Grasp basic p-n junction behavior for potential significant score improvement. Improve Electric current calculations, specifically shunt resistor, for better accuracy.",
        ],
        opportunities: [
            "Botany: You grasp conservation strategies well; reinforce for easy marks. Build on cell organelles strength for faster concept integration now.",
            "Zoology: Repeated success in Human Physiology, Biotechnology, and Animal Classification you show strong conceptual recall and clarity.",
            "Chemistry: Solid on bonding theories; quick review secures these foundation points. Organic hydrocarbon basics are strong; focus on reactions next.",
            "Physics: Excel in electric current fundamentals; practice advanced circuit problems. Mastered atomic/nuclear basics; apply to related modern physics problems.",
        ],
        threats: [
            "Botany: Strengthen Meiosis; understanding structural details prevents conceptual errors, crucial for genetics. Master Mendelian/ chromosomal disorders; clear conceptual grasp prevents significant score loss.",
            "Zoology: Ensure mastery of Recombinant DNA Technology; high-yield topic requires detailed knowledge. Perfect Human Physiology (e.g., Blood); essential systems are consistently high-scoring.",
            "Chemistry: Focus on Electrochemistry logic; conceptual clarity prevents assertion/ reasoning pitfalls. Improve Dual Nature calculations; accuracy in physics-chemistry integration prevents errors.",
            "Physics: Solidity p-n junction fundamentals; core understanding is critical for modern physics scores. Practice Magnetic Field motion formulas; accurate application avoids significant score loss.",
        ],
    };

    return (
        <div id="report-ready" className="max-w-5xl mx-auto bg-white font-sans text-gray-800">
            {/* Page 1 */}
            <div
                className="p-8 pb-4"
                style={{ minHeight: "calc(100vh - 60px)", pageBreakAfter: "always" }}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="text-2xl font-bold text-indigo-700">InzightEd</div>
                    <div className="text-right">
                        <p className="font-semibold">Name: Vignesh R</p>
                        <p className="text-sm text-gray-600">ID: 25029</p>
                    </div>
                </div>

                {/* Top Metrics */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                    {metrics.map(({ label, value }) => (
                        <div
                            key={label}
                            className="text-center border p-4 rounded-lg shadow-sm bg-gray-50"
                        >
                            <p className="text-2xl font-bold text-indigo-700">{value}</p>
                            <p className="text-sm text-gray-600">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Subject-wise Performance */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Subject-wise Performance</h2>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={subjectTotals}
                                    margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="subject" type="category" />
                                    <YAxis type="number" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar
                                        dataKey="total"
                                        name="Total Marks"
                                        fill="#4F46E5"
                                        maxBarSize={40}
                                        radius={[4, 4, 0, 0]}
                                    />

                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Pie Chart */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Understanding Errors</h2>
                        <div className="flex items-center justify-center gap-6 h-64">
                            {/* Pie Chart */}
                            <div className="w-1/2 h-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={errorData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={60}
                                            labelLine={false}
                                            label={({ percent, x, y }) => (
                                                <text
                                                    x={x}
                                                    y={y}
                                                    fill="#333"
                                                    textAnchor="middle"
                                                    dominantBaseline="central"
                                                    fontSize={10} // 👈 Adjust font size here
                                                >
                                                    {(percent * 100).toFixed(0)}%
                                                </text>
                                            )}
                                        >
                                            {errorData.map((entry, idx) => (
                                                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                                            ))}
                                        </Pie>

                                        <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Legend on the right */}
                            <div className="flex flex-col gap-2 text-xs">
                                {errorData.map((entry, idx) => {
                                    const total = errorData.reduce((sum, e) => sum + e.value, 0);
                                    const percent = ((entry.value / total) * 100).toFixed(0);
                                    return (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                                            ></div>
                                            <span>{`${entry.name}: ${percent}%`}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="mb-8">
                    {/* Line Chart */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">
                            Test-wise Subject Performance
                        </h2>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={trendData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="Physics"
                                        stroke="#4F46E5"
                                        strokeWidth={2}
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="Chemistry"
                                        stroke="#10B981"
                                        strokeWidth={2}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="Botany"
                                        stroke="#F59E0B"
                                        strokeWidth={2}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="Zoology"
                                        stroke="#EF4444"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Key Takeaways */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-3">Key Takeaways & Recommendations</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                        <li>Excellent overall performance with strong consistency. Keep up the good work!</li>
                        <li>Continue to focus on conceptual clarity, especially in areas where 'Conceptual Errors' are noted.</li>
                        <li>Consistent practice of numerical problems can help reduce 'Calculation Errors'.</li>
                        <li>Review 'Careless Errors' carefully to identify patterns and avoid similar mistakes in future tests.</li>
                    </ul>
                </div>
            </div>

            {/* Page 2 - SWOT Analysis */}
            <div className="p-8 pt-4 bg-gray-50" style={{ minHeight: "100vh" }}>
                <h2 className="text-xl font-bold mb-6 text-center text-indigo-700">SWOT</h2>

                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                        <h3 className="font-semibold mb-3 text-green-700 border-b pb-2">STRENGTH</h3>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            {swot.strength.map((txt, i) => (
                                <li key={i} className="text-gray-700">{txt}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                        <h3 className="font-semibold mb-3 text-red-700 border-b pb-2">WEAKNESS</h3>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            {swot.weakness.map((txt, i) => (
                                <li key={i} className="text-gray-700">{txt}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                        <h3 className="font-semibold mb-3 text-blue-700 border-b pb-2">OPPORTUNITIES</h3>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            {swot.opportunities.map((txt, i) => (
                                <li key={i} className="text-gray-700">{txt}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-yellow-100">
                        <h3 className="font-semibold mb-3 text-yellow-700 border-b pb-2">THREATS</h3>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            {swot.threats.map((txt, i) => (
                                <li key={i} className="text-gray-700">{txt}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
