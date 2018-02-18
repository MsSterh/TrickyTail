import React, { Component } from 'react'
import { Text, View, Image, AlertIOS } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Button from '../Button'

import fox1 from '../../images/fox/f1.png'

export default class Page0 extends Component {
  static propTypes = {
    goToNextPage: PropTypes.func.isRequired
  }

  showAlert = () => {
    AlertIOS.prompt(
      'Ну и бе-бе-бе!',
      'Не хочешь - как хочешь, я не в обиде. Теперь с чистой совестью заберу свой подарочек и буду таков ))) хе-хе-хе)) Будешь теперь меня просить вернуть, ан нет, без волшебного слова никак!',
      [
        {
          text: 'Брысь!',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Ладно, давай играть',
          onPress: (password) => {
            if (password.toLowerCase() === 'пожалуйста') {
              this.props.goToNextPage()
            }
          }
        }
      ]
    )
  }

  render() {
    const { goToNextPage } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Доброе утро!
        </Text>
        <Text style={styles.paragraph}>
          Позволь отрекоммендоваться -  Хитрый Хвост. Не то, чтобы я был очень хитрый, но определенно с хвостом =)
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox1}
            style={styles.fox1}
          />
        </View>
        <Text style={styles.paragraph}>
          Мне тут сорока на своем хвосте принесла весточку, что у тебя день рождения. И я подумал, что это отличный повод поживиться! Благо, на подарки у меня отменный нюх! И найти твой подарочек не составило особо труда. Так что, как видишь, я тут как тут! И подарочек твой перепрятал, хе-хе-хе))) Ты скажешь, что это нечестно, и это твой подарок! Но... я же его первый нашёл ^_^ Значит мой!
        </Text>
        <Text style={styles.paragraph}>
          Ладно, ладно, дам тебе шанс. Не такой уж я и воришка, как ты обо мне подумал! Просто мне скучно... со мной давно никто не играл.
        </Text>
        <Text style={[styles.paragraph, styles.paragraphCenter]}>
          Сыграешь одну партейку?
        </Text>

        <Button
          text="Сыграть"
          onPress={goToNextPage}
        />

        <Button
          text="Не буду!"
          onPress={this.showAlert}
        />
      </View>
    )
  }
}
