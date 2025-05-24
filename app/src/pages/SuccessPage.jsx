import { useLocation, useNavigate } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi";

export default function SuccessPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    if (!data) {
        navigate("/");
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 sm:p-12">
                    <div className="text-center mb-8">
                        <HiCheckCircle className="mx-auto h-16 w-16 text-green-600 dark:text-green-500 mb-4" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Form Submitted Successfully!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Your registration details have been received
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {Object.entries(data).map(([key, value]) => (
                            key !== "password" && key !== "showPassword" && (
                                <div 
                                    key={key}
                                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                                >
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 capitalize">
                                        {key.replace(/([A-Z])/g, ' $1')}
                                    </dt>
                                    <dd className="mt-1 text-gray-900 dark:text-white break-words">
                                        {value || <span className="text-gray-400">N/A</span>}
                                    </dd>
                                </div>
                            )
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate("/")}
                            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Back to Form
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
