pipeline {
    agent any

    triggers {
        cron('H 8 * * 1-5') // Monday to Friday 08:00
    }

    stages {
        stage('Trigger All Tests') {
            steps {
                ansiColor('xterm') {
                    script {
                        sh 'node --version'
                        sh 'npm --version'

                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run triggerAllTest'

                        sh 'echo -e "\033[31mThis is red text\033[0m"'
                    }
                }
            }
        }
    }
}
