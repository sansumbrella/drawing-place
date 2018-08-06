current_dir = $(shell pwd)

run:
	docker image build -t animation-server .
	docker container run --rm --mount type=bind,src=$(current_dir)/data/animation-frames,dst=/data/animation-frames --name animation-server -p 4040:80 animation-server
