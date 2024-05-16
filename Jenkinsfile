pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    triggers {
        cron('H 8 * * 1-5') // Monday to Friday 08:00
    }

    stages {
        stage('Trigger All Tests') {
            steps {                
                script {
                    sh 'node --version'
                    sh 'npm --version'
                    sh 'npm install'
                    sh 'npm update'
                    sh 'npm run triggerAllTest'
                    echo '\033[34mHello\033[0m \033[33mcolorful\033[0m \033[35mworld!\033[0m'
                    }                
            }
        }
    }
}
