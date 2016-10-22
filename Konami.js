import { Component, PropTypes } from 'react'

class Konami extends Component {

  constructor(props) {
    super(props)

    this.n = 0
    this.onKeydown = this.onKeydown.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
  }

  onKeydown(e) {
     if (e.keyCode === this.props.konami[this.n++]) {
        if (this.n === this.props.konami.length) {
            this.props.easterEgg()
            this.n = 0
            return false
        }
    } else {
        this.n = 0
    }
  }

  render() {
    return null
  }
}

Konami.propTypes = {
  easterEgg: PropTypes.func.isRequired,
  konami: PropTypes.arrayOf(PropTypes.number)
}

Konami.defaultProps = {
  konami: [38,38,40,40,37,39,37,39,66,65]
}

export default Konami
