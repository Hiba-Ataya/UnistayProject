// Profile.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarStudent } from "../../components/navbar/NavbarStudent";
import { Footer } from "../../components/Footer.js";

const Profile = () => {
  const navigate = useNavigate();

  // مثلاً نحفظ الايميل مؤقتًا، لاحقاً رح يجي من context أو auth
  const [email, setEmail] = useState("student@example.com");

  const handleLogout = () => {
    // حذف أي بيانات تسجيل دخول إذا موجودة
    localStorage.removeItem("userType");
    // تحويل لصفحة تسجيل الدخول أو الهبوط
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <NavbarStudent />
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Profile</h2>
        <p style={{ fontSize: "18px", margin: "20px 0" }}>
          <strong>Email:</strong> {email}
        </p>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#e6d4a5", // نفس لون beige button
            color: "#4A5328",
            border: "none",
            padding: "10px 25px",
            borderRadius: "25px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#dcca90")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e6d4a5")}
        >
          Log Out
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
