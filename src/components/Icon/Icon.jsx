import icons from './../../icons/icons.svg';

export const IconSVG = ({ name, size }) => (
  <svg width={size} height={size}>
    <use href={`${icons}#${name}`} />
  </svg>
);
