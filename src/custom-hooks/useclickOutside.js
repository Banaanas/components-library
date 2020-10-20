import { useEffect } from "react";

const useClickOutside = (DOMRef, closeMenu) => {
  useEffect(() => {
    // Close SideMenu if click outside the Ref - Callback Function
    const handleClickOutside = (event) => {
      // Return if Click inside the Dom Ref
      if (!DOMRef.current || DOMRef.current.contains(event.target)) {
        return;
      }
      // Close SideMenu if Click outside the Ref
      closeMenu();
    };

    // Add the Event Listener - MouseDown instead of click for UX purpose
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the Event Listener - useEffect Clean Up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [DOMRef, closeMenu]);
};

export default useClickOutside;
