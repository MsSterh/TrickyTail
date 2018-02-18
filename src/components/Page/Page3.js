import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox3 from '../../images/fox/f3.png'

export default class Page3 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Гений математики!
        </Text>
        <Text style={styles.paragraph}>
          Да и я столько же насчитал: 18 в зале, одна в прихожей, 2 в ванной да еще 5 на кухне. Надо же, и про холодильник с микроволновкой не забыл )) С математикой у тебя действительно всё хорошо, тут тебя не проведешь.
        </Text>
        <Text style={styles.paragraph}>
          Тогда как тебе будет по зубам детская загадка:
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox3}
            style={styles.fox3}
          />
        </View>
        <Text style={styles.paragraph}>
          На макушке корона,{'\n'}
          Толстая кожа,{'\n'}
          С шариком схож,{'\n'}
          На кого он похож!
        </Text>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Ха!"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="Висит он на ветке и с яблоком схож,
            Но красен, как рак, и, как бык, толстокож,
            И доверху полон рубиновых бус —
            Прозрачных, и сочных, и сладких на вкус."
        />
        <Hint
          count="2"
          text="Что за плод — шкатулочка с секретом!
            Семена — стекляшки на вид,
            Все прозрачные, все розового цвета,
            Потрясешь, как странно, не звенит."
        />
        <Hint
          count="3"
          text="Поищи плод у себя,
            Сунь глаза туда - сюда."
        />
      </View>
    )
  }
}
