import InputField from "./Components/InputField";

export default function UserForm() {
  return (
    
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
            Tambah User</h2>
        
        <label className="block text-gray-700 font-medium">Nama</label>
        <InputField
          label="nama"
          type="text" 
          placeholder="devi juniati" 
          className="w-full p-2 border border-gray-300 rounded mb-2" 
        />

        <label className="block text-gray-700 font-medium">Email</label>
        <InputField
          label="email"
          type="email" 
          placeholder="devi24ti@mahasiswa.pcr.ac.id" 
          className="w-full p-2 border border-gray-300 rounded mb-2" 
        />

        <label className="block text-gray-700 font-medium">Tanggal Lahir</label>
        <InputField
          label="tanggal lahir"
          type="date" 
          placeholder="21/12/2006" 
          className="w-full p-2 border border-gray-300 rounded mb-4" 
        />

        <button className="w-full bg-green-500 text-white p-2 rounded">
          Simpan
        </button>
      </div>
    </div>
  );
}