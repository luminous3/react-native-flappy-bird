import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Files from './Files'
import * as THREE from 'three'
import Expo from 'expo'
import { Group, Node, Sprite, SpriteView } from './GameKit'

const SPEED = 1.6 // speed of the pipes and ground
const GRAVITY = 900 // the force that the bird falls at
const FLAP = 320 // updward velocity that is applied to bird on tap
const SPAWN_RATE = 2600 // time in ms that each pipe is spawn
const OPENING = 120 // space between two pipes
const GROUND_HEIGHT = 64 // amount of ground we see at the bottom of the screen

export default class Game extends Component {
  componentWillMount() {}

  onSetup = async ({ scene }) => {
    this.scene = scene
    await this.setupBackground()
  }

  setupBackground = async () => {}

  updateGame = delta => {}

  // sprite is used for images and animations
  // node is used for positioning and managing state
  setupStaticNode = async ({ image, size, name }) => {
    const sprite = new Sprite()

    await sprite.setup({
      image,
      size,
    })

    const node = new Node({
      sprite,
    })

    node.name = name
    return node
  }

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <SpriteView
          touchDown={({ x, y }) => {}}
          touchMoved={({ x, y }) => {}}
          touchUp={({ x, y }) => {}}
          update={this.updateGame}
          onSetup={this.onSetup}
        />
      </View>
    )
  }
}
