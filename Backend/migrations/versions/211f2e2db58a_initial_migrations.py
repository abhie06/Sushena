"""Initial Migrations

Revision ID: 211f2e2db58a
Revises: eb5b3695ce63
Create Date: 2022-07-23 22:59:03.933330

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '211f2e2db58a'
down_revision = 'eb5b3695ce63'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('donor_table')
    op.add_column('donor_info', sa.Column('date_posted', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('donor_info', 'date_posted')
    op.create_table('donor_table',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('donor_name1', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('donor_name2', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('dob', sa.DATE(), autoincrement=False, nullable=True),
    sa.Column('gender', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('phone_number', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('email', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('pan_number', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('state', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('city', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('pincode', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('nationality', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('trs', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('category', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('range', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='donor_table_pkey'),
    sa.UniqueConstraint('email', name='donor_table_email_key'),
    sa.UniqueConstraint('pan_number', name='donor_table_pan_number_key'),
    sa.UniqueConstraint('phone_number', name='donor_table_phone_number_key')
    )
    # ### end Alembic commands ###