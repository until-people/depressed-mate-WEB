import TitleImage from '../../common/icon.jpeg'
const imagestyle = {
   height: '20vh',
   width: '20vw',
}
const titleImage = (
   <img
      src={`${TitleImage}?w=164&h=164&fit=crop&auto=format`}
      // srcSet={`${'../../../public/icon.jpeg'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={'imag'}
      loading="lazy"
      style={imagestyle}
      align="center"
   />
)
export { titleImage }
