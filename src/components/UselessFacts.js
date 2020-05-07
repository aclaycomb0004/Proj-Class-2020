import React from "react"
class UselessFacts extends React.Component {
  state = {
    uselessData: {},
  }
  componentDidMount() {
    this.fetchUselessFact()
  }
  fetchUselessFact = async () => {
    const url = "https://uselessfacts.jsph.pl/random.json?language=en"
    const res = await fetch(url)
    const useless = await res.json()
    this.setState({uselessData: useless})
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: 25}}>
        <h2>Useless Fact</h2>
        <ul>
          <li>{this.state.uselessData && this.state.uselessData.text}</li>
        </ul>
      </div>
    )
  }
}
export default UselessFacts;