/*
 * IMAGES
 */
import onErrorImageLocal from './imgs/mathle_error_img.webp';

export const onErrorImage = onErrorImageLocal;

/*
 * IMAGE FUNCTIONS
 */
export const onErrorImageFunction = (e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.target as HTMLImageElement).src = onErrorImageLocal;

/*
 * ICONS
 */
import mathleIcon1 from './icons/mathle-icon-1.webp';
import upArrow from './icons/up-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export const mathleIcon = mathleIcon1;
export const upArrowIcon = upArrow;
export const rightArrowIcon = rightArrow;