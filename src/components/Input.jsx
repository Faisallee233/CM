export default function Input({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="block text-xs uppercase text-muted mb-1">{label}</label>
      <input
        className="w-full px-4 py-3 bg-white/5 border border-border text-white text-sm focus:border-gold outline-none"
        {...props}
      />
    </div>
  );
}