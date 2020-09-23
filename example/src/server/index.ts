/* eslint-disable @typescript-eslint/ban-ts-comment */
import UniversalHotReload from 'universal-hot-reload'
// @ts-ignore
import serverConfig from '../../webpack.config.server'
// @ts-ignore
import clientConfig from '../../webpack.config.client'

UniversalHotReload({ serverConfig, clientConfig })
