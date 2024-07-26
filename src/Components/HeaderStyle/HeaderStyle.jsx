export default function HeaderStyle({
  textColorClass,
  bgColorClassBefore,
  bgColorClassAfter,
}) {
  return (
    <div
      className={`w-fit relative before:content-[''] before:w-28 before:h-1 before:absolute ${bgColorClassBefore} before:top-2 before:-inset-32 after:content-[''] after:w-28 after:h-1 after:absolute ${bgColorClassAfter} after:top-2 after:inset-12`}>
      <i className={`fa-solid fa-star fa-2xl ${textColorClass}`}></i>
    </div>
  );
}
