import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import query from "../queries/getSong";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

export class SongDetail extends Component {
  render() {
    const { loading, song } = this.props.data;

    if (loading) {
      return <div />;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h4>{song.title}</h4>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id} />
      </div>
    );
  }
}

export default graphql(query, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
