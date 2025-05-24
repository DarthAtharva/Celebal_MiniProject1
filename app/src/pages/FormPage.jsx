import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
    const countryCityData = {
        India: ["+91", "Jaipur", "Bhopal", "Delhi", "Mumbai", "Bangalore"],
        USA: ["+1", "New York", "San Francisco", "Chicago"],
        UK: ["+44", "London", "Manchester", "Liverpool"],
    };

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        showPassword: false,
        phoneCountryCode: "",
        phoneNumber: "",
        country: "",
        city: "",
        panNumber: "",
        aadharNumber: ""
    });

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "panNumber") {
            value = value.toUpperCase();
        }

        setForm(prev => { 
            return ({
            ...prev,
            [name]: value,
            ...(name === "country" && countryCityData[value]
            ? { phoneCountryCode: countryCityData[value][0], city: "" } 
            : {})
        })});
    }

    const togglePassword = () => {
        setForm(prev => {
            return ({
                ...prev,
                showPassword: !prev.showPassword
            })
        })
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/success", {state: { ...form }});
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Create Your Account
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Please fill in all required information to register
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    First Name
                                </label>
                                <input 
                                    name="firstName" 
                                    value={form.firstName}
                                    autoFocus
                                    autoComplete="given-name"
                                    spellCheck="false"
                                    maxLength="20"
                                    title="First name should only contain letters and be up to 15 characters long."
                                    id="firstName"
                                    type="text" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your first name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Last Name
                                </label>
                                <input 
                                    name="lastName" 
                                    value={form.lastName}
                                    autoComplete="family-name"
                                    spellCheck="false"
                                    title="Last name should only contain letters and be up to 15 characters long."
                                    id="lastName"
                                    type="text" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your last name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Username */}
                        <div>
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Username
                            </label>
                            <input 
                                name="userName" 
                                value={form.userName}
                                autoComplete="username" 
                                spellCheck="false"
                                title="Username should only contain letters, numbers, _ and be up to 15 characters long."
                                id="userName"
                                type="text" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Choose a unique username"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email Address
                            </label>
                            <input 
                                name="email" 
                                value={form.email}
                                autoComplete="email" 
                                spellCheck="false"
                                maxLength={50}
                                title="Enter valid email"
                                id="email"
                                type="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="your.email@example.com"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <div className="relative">
                                <input 
                                    name="password" 
                                    value={form.password}
                                    spellCheck="false"
                                    minLength={8}
                                    title="Password must be atleast 8 characters long and contain atleast one lowercase letter, uppercase letter, digit and special character (@ $ ! % * ? &)"
                                    id="password"
                                    type={form.showPassword ? "text" : "password"}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Create a strong password"
                                    required
                                    onChange={handleChange}
                                />
                                <button 
                                    type="button" 
                                    onClick={togglePassword}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                >
                                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer">
                                        {form.showPassword ? "Hide" : "Show"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Country
                                    </label>
                                    <select 
                                        name="country" 
                                        value={form.country}
                                        id="country"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        onChange={handleChange}
                                    >
                                        <option value="">-- Select Country --</option>
                                        {Object.entries(countryCityData).map(([countryName, dataArray]) => {
                                            return (
                                                <option key={countryName} value={countryName}>
                                                    {countryName}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        City
                                    </label>
                                    <select 
                                        name="city" 
                                        value={form.city}
                                        id="city"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        onChange={handleChange}
                                    >
                                        {form.country ? (
                                            <>
                                                <option value="">-- Select City --</option>
                                                {countryCityData[form.country].slice(1).map(city => {
                                                    return (
                                                        <option key={city} value={city}>
                                                            {city}
                                                        </option>
                                                    )
                                                })}
                                            </>
                                        ) : (
                                            <option value="">-- Select Country First --</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Phone Information */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="phoneCountryCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Country Code
                                </label>
                                <input 
                                    name="phoneCountryCode" 
                                    value={form.phoneCountryCode}
                                    pattern="\+[0-9]{1,4}"
                                    title="Enter valid country code, e.g: +91"
                                    id="phoneCountryCode"
                                    type="text" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="+91"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Phone Number
                                </label>
                                <input 
                                    name="phoneNumber" 
                                    value={form.phoneNumber}
                                    title="Enter valid phone number"
                                    id="phoneNumber"
                                    type="text" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your phone number"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="panNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        PAN Number
                                    </label>
                                    <input 
                                        name="panNumber" 
                                        value={form.panNumber}
                                        spellCheck="false"
                                        minLength={10}
                                        title="Enter valid PAN (e.g ABCDE13234F)"
                                        id="panNumber"
                                        type="text" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="aadharNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Aadhar Number
                                    </label>
                                    <input 
                                        name="aadharNumber" 
                                        value={form.aadharNumber}
                                        spellCheck="false"
                                        minLength={12}
                                        title="Enter valid 12-digit Aadhar"
                                        id="aadharNumber"
                                        type="text" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button 
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-200"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
