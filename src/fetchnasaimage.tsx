import * as React from "react";
import { searchurls } from "./searchurls";
import RefreshButton from "./RefreshButton";

export default class FetchNasaImage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      imageIndex: 0,
      allImages: null,
    };

    this.refreshImage = this.refreshImage.bind(this);
  }

  async componentDidMount() {
    this.refreshURL();
  }

  async refreshURL() {
    const requestOptions = {
      method: "GET",
    };
    const randomurl = searchurls[Math.floor(Math.random() * searchurls.length)];
    console.log(randomurl);
    const url = randomurl;
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    this.setState({
      allImages: data.collection.items.sort(() => Math.random() - 0.5),
      loading: false,
    });
  }

  refreshImage() {
    console.log(
      this.state.allImages,
      this.state.allImages.length,
      this.state.imageIndex
    );
    if (this.state.imageIndex === this.state.allImages.length - 1) {
      this.refreshURL();
    }
    this.setState({
      imageIndex: this.state.imageIndex + 1,
    });
  }

  render() {
    if (this.state.loading) {
      return <div> loading... </div>;
    }

    if (this.state.allImages.length === 0) {
      return <div> didn't return an image. try again </div>;
    }

    return (
      <section className="home">
        <div className="wrapper">
          <div className="sidebar">
            <h2>Moment</h2>
            <div className="info">
              <h4>
                {this.state.allImages[this.state.imageIndex].data[0].title}
              </h4>
              <div className="description">
                <p>
                  {
                    this.state.allImages[this.state.imageIndex].data[0]
                      .description
                  }
                </p>

                <RefreshButton refreshImage={this.refreshImage} />
              </div>
            </div>
          </div>
          <div className="showcase">
            <img
              src={this.state.allImages[this.state.imageIndex].links[0].href}
              alt={this.state.allImages[this.state.imageIndex].data[0].title}
            />
          </div>
        </div>
      </section>
    );
  }
}
