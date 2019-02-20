// import * as React from "react";
// import classes from "./styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

// interface Image {
//   url: string;
//   createdOn: string;
//   description: string;
// }

// interface HomeGridSate {
//   images: Image[];
// }

// // export interface HomeGridProps {
// //   getImgUrl: () => void;
// // }

// const photoAPI =
//   "https://api.unsplash.com/photos/random/?client_id=1f2ebaca676b28537707a0d981b5f398faf86fb51946598d01f7a456ce97b4b8&count=20&orientation=portrait";

// class HomeGrid extends React.Component<{}, HomeGridSate> {
//   state = {
//     images: []
//   };

//   componentDidMount() {
//     fetch(photoAPI)
//       .then(response => response.json())
//       .then(json => {
//         setTimeout(() => {}, 5000);
//         this.setState({
//           images: json.map(data => {
//             return {
//               url: data.urls.small,
//               description: data.description,
//               createdOn: data.created_at
//             };
//           })
//         });
//       });
//   }

//   renderImages = (images): Image[] => {
//     return images.map(imageObj => (
//       <Card className={classes.card} key={imageObj.url}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             className={classes.media}
//             image={imageObj.url}
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {imageObj.createdOn}
//             </Typography>
//             <Typography component="p">{imageObj.description}</Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     ));
//   };

//   render() {
//     return (
//       <div className={classes.homeGrid}>
//         {/* <Button onClick={this.onClick}>Run Function</Button> */}
//         {this.renderImages(this.state.images)}
//       </div>
//     );
//   }
// }

// export default HomeGrid;
