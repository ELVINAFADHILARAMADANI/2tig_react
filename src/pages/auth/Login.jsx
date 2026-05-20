import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BsFillExclamationDiamondFill } from "react-icons/bs"
import { ImSpinner2 } from "react-icons/im"

export default function Login() {

    /* navigate, state & handleChange */
    const navigate = useNavigate() 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    /* process form */
   const handleSubmit = async (e) => {
    e.preventDefault()

    if (!dataForm.email || !dataForm.password) {
        setError("Username and password are required!")
        return
    }

    setLoading(true)
    setError("")

    try {
        const response = await axios.post(
            "https://dummyjson.com/users/login", // ✅ BENAR
            {
                username: dataForm.email,
                password: dataForm.password,
            }
        )

        // ✅ HANYA JIKA BERHASIL
        if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate("/")
        }

    } catch (err) {
        console.log("ERROR:", err)

        // ❌ JANGAN redirect di sini
        if (err.response) {
            setError(err.response.data.message)
        } else if (err.request) {
            setError("Network error, please check your connection")
        } else {
            setError("Something went wrong")
        }
    } finally {
        setLoading(false)
    }
    }
    /* error & loading status */
    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-3 text-sm rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2" />
            {error}
        </div>
    ) : null

    const loadingInfo = loading ? (
        <div className="bg-gray-200 mb-5 p-3 text-sm rounded flex items-center">
            <ImSpinner2 className="me-2 animate-spin" />
            Mohon Tunggu...
        </div>
    ) : null

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Welcome Back 👋
            </h2>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <input
                        type="text"
                        name="email"
                        placeholder="Username"
                        className="w-full px-4 py-2 border rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg"
                >
                    Login
                </button>
            </form>
        </div>
    )
}