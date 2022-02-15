import Vue from 'vue'
import Amplify from 'aws-amplify'
import awsExports from '../src/aws-exports'

Amplify.configure(awsExports)
Vue.use(Amplify)
