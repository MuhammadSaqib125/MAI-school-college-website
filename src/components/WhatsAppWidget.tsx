export default function WhatsAppWidget() {
  // We format the number by removing the 00 and adding the country code directly
  const phoneNumber = "923315277499";
  const message = encodeURIComponent("Hello! I would like to know more about MAI School & College.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 group-hover:animate-pulse">
        <path d="M12.031 0C5.395 0 0 5.394 0 12.031c0 2.122.553 4.184 1.603 6.007L.18 23.23l5.34-1.402c1.765.955 3.754 1.458 5.794 1.458h.004c6.634 0 12.029-5.394 12.029-12.031C23.348 5.834 18.665 0 12.031 0zm0 21.328h-.003c-1.802 0-3.568-.484-5.116-1.403l-.367-.217-3.805.998.995-3.71-.238-.378C2.454 15.011 1.954 13.065 1.954 11.272c0-5.557 4.523-10.081 10.081-10.081 2.695 0 5.228 1.05 7.133 2.955 1.905 1.905 2.955 4.437 2.955 7.132 0 5.557-4.523 10.08-10.08 10.08zm5.534-7.551c-.303-.152-1.794-.886-2.074-.988-.28-.102-.484-.152-.687.151-.202.303-.784.988-.962 1.19-.177.202-.355.227-.658.076-.303-.152-1.282-.473-2.443-1.507-.903-.805-1.513-1.8-1.691-2.104-.177-.304-.019-.469.133-.62.137-.137.304-.355.456-.532.152-.177.203-.304.304-.506.102-.202.05-.38-.025-.531-.076-.152-.687-1.657-.942-2.268-.248-.595-.502-.514-.687-.524-.176-.01-.38-.011-.583-.011-.202 0-.532.076-.811.38-.28.303-1.064 1.038-1.064 2.531s1.09 2.935 1.242 3.137c.152.202 2.138 3.262 5.178 4.571 2.052.883 2.871.936 3.931.785 1.206-.171 3.693-1.508 4.212-2.966.52-1.458.52-2.705.368-2.966-.152-.26-.558-.412-.861-.564z" />
      </svg>
    </a>
  );
}
