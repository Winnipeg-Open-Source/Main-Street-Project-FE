#!/bin/sh

failure()
{ 
	echo "Google Cloud SDK failed to install."
	exit 1
}

install_sdk()
{
	echo "Installing Google Cloud SDK..."
	curl https://sdk.cloud.google.com | bash
	source_profiles
	if sdk_is_installed
	then
		success
	else
		failure
	fi
	gcloud init
	gcloud auth application-default login
}

sdk_is_installed()
{
	gcloud -v | grep -q "Google Cloud SDK"
}

source_profiles()
{
	source_profile ~/.bash_profile
	source_profile ~/.zshrc
}

source_profile()
{
	if [ -f "$1" ]
	then
		. $1
	fi
}

success()
{
	echo "Google Cloud SDK is installed."
}

source_profiles
if sdk_is_installed
then
	success
else
	install_sdk
	echo "Please restart your terminal for changes to take affect."
fi
