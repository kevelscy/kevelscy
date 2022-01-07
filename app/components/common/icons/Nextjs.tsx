import { IIconBasicProps } from './types'

export const NextIcon = ({ classes }: IIconBasicProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      className={`w-6 h-6 fill-black ${classes}`}
    >
      <path d='M1,21H23L12,2'></path>
    </svg>
  )
}
