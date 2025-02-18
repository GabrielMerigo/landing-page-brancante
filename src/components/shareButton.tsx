import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/readingBtnStyle.css";

const ShareButton = () => {
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Brancante Seguros!",
          url: url,
        });
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() =>
          toast.success("🔗 Link copiado para a área de transferência!")
        )
        .catch(() => toast.error("❌ Erro ao copiar o link!"));
    }
  };

  return (
    <button className="button-style" onClick={handleShare}>
      <p className="reading-btn-text">Compartilhar</p>
    </button>
  );
};

export default ShareButton;
