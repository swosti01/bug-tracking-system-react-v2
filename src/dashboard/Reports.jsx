import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import { loadSetting } from "../context/SettingContext";
import { cn } from "../utils";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  // Sample data for demonstration
  const navigate = useNavigate();
  const { isDark } = loadSetting();
  const { reportList } = loadDashboard();
  const { listReport } = updateDashboard();

  const tableHeader = [
    "Id",
    "Title",
    "Status",
    "Priority",
    "Severity",
    "Detail",
  ];
  const dataSets = {
    users: [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
      { id: 3, name: "Alice John", email: "alice@exa.com", role: "Viewer" },
      { id: 4, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 5, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
      { id: 6, name: "Alice John", email: "alice@exa.com", role: "Viewer" },
      { id: 7, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 8, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
      { id: 9, name: "Alice John", email: "alice@exa.com", role: "Viewer" },
      { id: 10, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 11, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
      { id: 12, name: "Alice John", email: "alice@exa.com", role: "Viewer" },
      // Add more data as needed
    ],
    products: [
      { id: 1, name: "Product A", price: "$20", category: "Electronics" },
      { id: 2, name: "Product B", price: "$30", category: "Home Appliances" },
      { id: 3, name: "Product C", price: "$15", category: "Accessories" },
      // Add more data as needed
    ],
    orders: [
      { id: 1, orderId: "ORD001", customer: "John Doe", total: "$50" },
      { id: 2, orderId: "ORD002", customer: "Jane Smith", total: "$75" },
      { id: 3, orderId: "ORD003", customer: "Alice Johnson", total: "$100" },
      // Add more data as needed
    ],
  };

  const [selectedData, setSelectedData] = useState("users");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // const data = dataSets[selectedData];
  const [data, setData] = useState(reportList);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleDataChange = (e) => {
    setSelectedData(e.target.value);
    setCurrentPage(1); // Reset to first page when data changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filterr = (reportList) => {
    delete reportList.reporte;
    // title
    // status
    // priority
    // severity

    // id
    // assigneesIds
    // description
    // dueDate
    // environment
    // fileIds

    // reportedDate
    // reporterId
    // resolution

    // stepsToReproduce
    // teamId

    // updatedDate
    // version
  };

  useEffect(() => {
    listReport();
  }, []);

  useEffect(() => {
    setData(reportList);
    console.log("reportList", reportList);
  }, [reportList]);

  return (
    <div
      className={cn(
        "p-6 h-full w-full flex flex-col transition-all duration-300 bor",
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      )}
    >
      <h2
        className={`text-lg font-semibold flex items-center gap-2 bor ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Bug Reports
      </h2>

      <div
        className={cn(
          "flex grow-1 h-[800px] flex-col gap-3 py-3 rounded-lg border mt-2 transition-all duration-300 bor non",
          isDark
            ? "bg-gray-800 border-gray-700"
            : "bg-stone-200 border-gray-400"
        )}
      >
        {/* Data Selector */}
        <div className="flex flex-row justify-end bor px-3 non">
          <div>
            <select
              value={selectedData}
              onChange={handleDataChange}
              className={cn(
                "w-[160px] px-4 py-1 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                isDark
                  ? "bg-gray-800 text-gray-100 border-gray-700"
                  : "bg-stone-200 text-gray-900 border-gray-400"
              )}
            >
              <option value="users">Users</option>
              <option value="products">Products</option>
              <option value="orders">Orders</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 bor non">
          <table className="w-full px-3">
            <thead
              className={cn(
                "transition-all duration-300",
                isDark ? "text-gray-200" : "text-gray-800"
              )}
            >
              <tr>
                {tableHeader.map((item, index) => (
                  <th
                    key={item}
                    className={cn(
                      "px-3 py-[10px] text-left transition-all duration-300 border-b",
                      isDark
                        ? "border-gray-700 text-gray-200"
                        : "border-gray-400 text-gray-800"
                      // index == 0 ? "pl-6 bor" : ""
                    )}
                  >
                    {item}
                  </th>
                ))}
                {/* {data &&
                  data.length > 0 &&
                  Object.keys(data[0]).map((key, index) => (
                    <th
                      key={key}
                      className={cn(
                        "px-3 py-[10px] text-left transition-all duration-300 border-b",
                        isDark
                          ? "border-gray-700 text-gray-200"
                          : "border-gray-400 text-gray-800",
                        index == 0 ? "pl-6 bor" : ""
                      )}
                    >
                      {key.toUpperCase()}
                    </th>
                  ))} */}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={item.id}
                  className={cn(
                    "transition-all duration-300",
                    isDark
                      ? "text-gray-200 hover:bg-gray-700"
                      : "text-gray-800 hover:bg-gray-300"
                  )}
                >
                  <td
                    className={cn(
                      "px-3 py-[10px] transition-all duration-300 border-b  pl-5",
                      isDark
                        ? "border-gray-700 text-gray-200"
                        : "border-gray-400 text-gray-800"
                      // index == 0 ? "pl-5 bor" : ""
                    )}
                  >
                    <span className="">{index + 1}</span>
                  </td>
                  <td
                    className={cn(
                      "px-3 py-[10px] transition-all duration-300 border-b",
                      isDark
                        ? "border-gray-700 text-gray-200"
                        : "border-gray-400 text-gray-800"
                      // index == 0 ? "pl-5 bor" : ""
                    )}
                  >
                    <span className="">{item.title}</span>
                  </td>
                  <td
                    className={cn(
                      "px-3 py-[10px] transition-all duration-300 border-b",
                      isDark
                        ? "border-gray-700 text-gray-200"
                        : "border-gray-400 text-gray-800"
                    )}
                  >
                    <span className="">{item.status}</span>
                  </td>
                  <td
                    className={cn(
                      "px-3 py-[10px] transition-all duration-300 border-b",
                      isDark
                        ? "border-gray-700 text-gray-200"
                        : "border-gray-400 text-gray-800"
                    )}
                  >
                    <span className="">{item.priority}</span>
                  </td>
                  <td
                    className={cn(
                      "px-3 py-[10px] transition-all duration-300 border-b",
                      isDark
                        ? "border-gray-700 text-gray-200"
                        : "border-gray-400 text-gray-800"
                    )}
                  >
                    <span className="">{item.severity}</span>
                  </td>
                  <td
                    className={cn(
                      "px-3 py-[10px] transition-all duration-300 border-b",
                      isDark
                        ? "border-gray-700 text-gray-200"
                        : "border-gray-400 text-gray-800"
                    )}
                  >
                    <span
                      className="hover:underline cursor-pointer"
                      onClick={() => {
                        navigate("/dashboard/report/" + item.id);
                      }}
                    >
                      Detail
                    </span>
                  </td>
                  {/* {Object.values(item).map((value, index) => (
                    <td
                      key={index}
                      className={cn(
                        "px-3 py-[10px] transition-all duration-300 border-b",
                        isDark
                          ? "border-gray-700 text-gray-200"
                          : "border-gray-400 text-gray-800",
                        index == 0 ? "pl-5 bor" : ""
                      )}
                    >
                      <span className="">{value}</span>
                    </td>
                  ))} */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center px-3 mt-2 non">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${
              isDark
                ? "bg-[#333333] text-[#E0E0E0]"
                : "bg-[#E0E0E0] text-[#424242]"
            } border-2 border-[#1976D2] hover:bg-[#1976D2] hover:text-[#E0E0E0] transition-colors disabled:opacity-50`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className={cn(!isDark ? "text-[#1976D2]" : "text-[#FF9800]")}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${
              isDark
                ? "bg-[#333333] text-[#E0E0E0]"
                : "bg-[#E0E0E0] text-[#424242]"
            } border-2 border-[#1976D2] hover:bg-[#1976D2] hover:text-[#E0E0E0] transition-colors disabled:opacity-50`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
