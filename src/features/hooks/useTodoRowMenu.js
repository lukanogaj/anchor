import { useState, useRef, useEffect } from "react";

export const useTodoRowMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuRef = useRef(null);
	const closeMenu = () => setIsMenuOpen(false);
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	// Menu interactions
	useEffect(() => {
		if (!isMenuOpen) return;

		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	return { isMenuOpen, menuRef, closeMenu, toggleMenu };
};
