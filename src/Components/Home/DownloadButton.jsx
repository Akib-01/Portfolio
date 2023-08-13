import React from "react";
const DownloadButton = ({ buttonText }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="p-2 border border-[#34d5eb] font-medium text-[#34d5eb] hover:bg-[#34d5eb] hover:border-[#0d0d13e6] hover:text-[#0d0d13e6]"
    >
      {buttonText}
    </button>
  );
};

export default DownloadButton;
