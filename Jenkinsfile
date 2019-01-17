#!/usr/bin/env groovy

pipeline {
    agent { label 'master' }
    options {
        skipDefaultCheckout()
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '30'))
    }
    environment {
        TERM_FLAGS=" "
        PATH="/home/eganvas/google-cloud-sdk/bin:$PATH"
    }
    stages {
        stage('Initial cleanup and checkout') {
            steps {
                sh 'if [ $(docker ps -aq | wc -l) -gt 0 ] ; then docker rm -f $(docker ps -aq) ; fi'
                sh 'sudo chown -R ${USER}:${USER} .'
                deleteDir()
                checkout scm
            }
        }
        stage('Deploy: staging') {
            when {
                expression {return env.BRANCH_NAME.equals('master')}
            }
            steps {
                echo 'Deploy to staging environment'
                sh 'gcloud auth list'
                sh 'make build/docker/deployable publish'
                sh 'make deploy/staging'
            }
        }
    }
}
