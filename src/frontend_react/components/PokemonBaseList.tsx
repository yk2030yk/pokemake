import React from 'react'
import { connect } from 'react-redux'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
  pokemonBaseOperations,
  pokemonBaseSelectors
} from '@/store/modules/PokemonBase'
import { PokemonBase } from '@/lib/models/PokemonBase'

type PokemonBaseItemProps = {
  pokemonBase: PokemonBase
}

const PokemonBaseItem: React.FC<PokemonBaseItemProps> = ({
  pokemonBase
}: PokemonBaseItemProps) => (
  <>
    <div className="pokemon-base-item">
      <div className="pokemon-base-item-columns">{pokemonBase.no}</div>
      <div className="pokemon-base-item-columns">{pokemonBase.name}</div>
      <div className="pokemon-base-item-columns">{pokemonBase.form}</div>
    </div>
    <style jsx>{`
      .pokemon-base-item {
        display: grid;
        grid-template-columns: 100px 1fr 200px;
        border-bottom: solid 1px #999;
      }
      .pokemon-base-item:last-child {
        border-bottom: none;
      }
      .pokemon-base-item-columns {
        padding: 3px;
        border-right: solid 1px #999;
      }
      .pokemon-base-item-columns:last-child {
        border-right: none;
      }
    `}</style>
  </>
)

type PokemonBaseListProps = {
  pokemonBaseList: PokemonBase[]
}

const PokemonBaseList: React.FC<PokemonBaseListProps> = ({
  pokemonBaseList
}: PokemonBaseListProps) => (
  <>
    <div className="pokemon-base-list">
      {pokemonBaseList.map((item, index) => (
        <PokemonBaseItem key={`${item.no}-${index}`} pokemonBase={item} />
      ))}
    </div>
    <style jsx>{`
      .pokemon-base-list {
        height: 300px;
        border: solid 1px #999;
        overflow: auto;
        background-color: #FFF;
      }
    `}</style>
  </>
)

type PokemonBaseFetchButtonProps = {
  fetch: () => void
}

const PokemonBaseFetchButton: React.FC<PokemonBaseFetchButtonProps> = ({
  fetch
}: PokemonBaseFetchButtonProps) => <button onClick={fetch}>一覧取得</button>

const PokemonBaseListTitle: React.FC = () => (
  <>
    <div className="pokemon-base-list-title">ポケモン一覧</div>
    <style jsx>{`
      .pokemon-base-list-title {
        font-weight: bold;
        font-size: 14px;
      }
    `}</style>
  </>
)

const mapStateToProps = state => {
  return {
    pokemonBaseList: pokemonBaseSelectors.getPokemonBaseList(
      state.PokemonBase.pokemonBase
    )
  }
}

const mapDispatchToProps = {
  fetch: pokemonBaseOperations.fetch
}

type PokemonBaseListBoxProps = {
  fetch: () => void
  pokemonBaseList: PokemonBase[]
}

interface State {
  value: string
  list: PokemonBase[]
}

class NameForm extends React.Component<{
  pokemonBaseList: PokemonBase[]
}, State> {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      list: this.props.pokemonBaseList.slice()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  public get filteredList() {
    if (this.state.value.length < 2) {
      return []
    }

    const filterd = this.state.list.filter(item => {
      return item.name.indexOf(this.state.value) != -1
    })
    return filterd
  }

  render() {

    let SuggestItems
    if (this.filteredList.length > 0) {
      SuggestItems = (
        <>
        <div className="suggest-items">
          {this.filteredList.map(item => <p>{item.name}</p>)}
        </div>
        <style jsx>{`
          .suggest-items {
            position: absolute;
            top: 20px;
            left: 0;
            width: 200px;
            max-height: 80px;
            overflow-y: auto;
            background-color: #FFF;
            color: red;
            border: solid 1px #999;
          }
        `}</style>
          </>
      )
    }

    return (
      <>
        <div className="suggest">
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          {SuggestItems}
        </div>
        <style jsx>{`
          .suggest {
            position: relative;
          }
        `}</style>
      </>
    )
  }
}

const PokemonBaseListBox: React.FC<PokemonBaseListBoxProps> = ({
  fetch,
  pokemonBaseList
}: PokemonBaseListBoxProps) => (
  <div>
    <PokemonBaseFetchButton fetch={fetch} />
    <div>
      <NameForm pokemonBaseList={pokemonBaseList} />
      <PokemonBaseListTitle />
      <PokemonBaseList pokemonBaseList={pokemonBaseList} />
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonBaseListBox)
