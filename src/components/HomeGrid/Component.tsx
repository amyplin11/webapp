import * as React from "react";
import classes from "./styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export interface HomeGridProps {
  images: string;
  getImgUrl: () => void;
}

class HomeGrid extends React.Component<HomeGridProps> {
  componentDidMount() {
    this.props.getImgUrl();
  }

  onClick = () => {
    this.props.getImgUrl();
  };

  renderImages = images => {
    return images.map(imageObj => {

      return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="imageObj.createdOn"
              className={classes.media}
              image={imageObj.url}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {imageObj.createdOn}
              </Typography>
              <Typography component="p">
              {imageObj.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    );
  }
}

  render() {
    return (
      <div className={classes.homeGrid}>
        {/* <Button onClick={this.onClick}>Run Function</Button> */}
        {this.renderImages(this.props.images)}
      </div>
    );
  }
}

export default HomeGrid;
